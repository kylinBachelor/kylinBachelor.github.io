---
title: "Java 异步工具"
tags: 
  - 异步
categories:
  - Java
description: Java 异步工具
date: 2025-8-20 16:08:33
updated: 2025-8-20 16:08:33
---

```java

package com.pig4cloud.pigx.common.ext.util;

import com.pig4cloud.pigx.common.core.util.SpringContextHolder;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

public class AsyncUtil {

    // 线程池
    static ThreadPoolTaskExecutor treadPool = SpringContextHolder.getBean(ThreadPoolTaskExecutor.class);


    /**
     * 异步执行 supplier
     * @author congpeitong
     * @date 2025-08-06 09:06:17
     * @param suppliers 函数式接口类型
     * @return java.util.List<java.util.List<T>>
     */
    public static List<Object> supplierExecute(List<Supplier<Object>> suppliers) {
        List<CompletableFuture<Object>> futures = new ArrayList<>();

        for (Supplier<Object> s : suppliers) {
            CompletableFuture<Object> f = CompletableFuture.supplyAsync(() -> {
                try {
                    return s.get(); // 直接返回 Supplier 的结果
                } catch (Exception e) {
                    throw new RuntimeException(e); // 捕获异常并抛出运行时异常
                }
            }, treadPool);
            futures.add(f);
        }

        // 等待所有 CompletableFuture 完成
        CompletableFuture<Void> allFutures = CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]));
        // 将所有结果收集到 List 中
        return allFutures.thenApply(v -> {
            List<Object> resultList = new ArrayList<>();
            for (CompletableFuture<Object> future : futures) {
                try {
                    resultList.add(future.get()); // 将每次CompletableFuture的结果添加到List中，最终就是二维数组
                } catch (Exception e) {
                    throw new RuntimeException(e); // 捕获异常并抛出运行时异常
                }
            }
            return resultList;
        }).join(); // 阻塞等待所有任务完成并返回结果
    }

    /**
     * 无参数无返回值的异步执行
     * @param runnableList 函数式接口类型
     */
    public static void runnableExecutor(List<Runnable> runnableList) {
        // 将每个Consumer转换为CompletableFuture
        CompletableFuture<?>[] futures = runnableList.stream()
                .map(runnable ->  CompletableFuture.runAsync(runnable, treadPool))
                .toArray(CompletableFuture[]::new);

        // 等待所有任务完成
        CompletableFuture.allOf(futures).join();
    }


    public static void main(String[] args) {
        supplierMain();
        noArgNoReturnMain();
    }

    public static void supplierMain() {
        List<Supplier<Object>> supplier =  List.of(
                () -> {
                    try {
                        Thread.sleep(5000);
                        return List.of("aaaa", "aaa", "aaaa");
                    }catch (InterruptedException e) {
                        e.printStackTrace();
                        return null;
                    }
                },
                () -> {
                    try {
                        Thread.sleep(3000);
                        return List.of(1111, 22222, 333);
                    }catch (InterruptedException e) {
                        e.printStackTrace();
                        return null;
                    }
                },
                () -> {
                    try {
                        Thread.sleep(6000);
                        return List.of("ccc", "cccc", "ccc");
                    }catch (InterruptedException e) {
                        e.printStackTrace();
                        return null;
                    }
                },
                () -> {
                    try {
                        Thread.sleep(2000);
                        return List.of("ddd", "ddddd", "ddddd");
                    }catch (InterruptedException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
        );
        List<Object> lists = supplierExecute(supplier);
        System.out.println(lists);
    }

    public static void noArgNoReturnMain() {
        List<Runnable> consumers = List.of(
                () -> {
                    try {
                        Thread.sleep(10000);
                        System.out.println("Consumer 1 processed: ");
                    }catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                } ,
                () -> System.out.println("Consumer 2 processed: "),
                () -> {
                    try {
                        Thread.sleep(5000);
                        System.out.println("Consumer 3 processed after delay: ");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
        );
        runnableExecutor(consumers);
        System.out.println("结束执行");
    }



}


```
