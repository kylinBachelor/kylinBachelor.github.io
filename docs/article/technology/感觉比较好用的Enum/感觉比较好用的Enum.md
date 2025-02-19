---
title: 感觉比较好用的Enum
tags:
  - Java
  - 枚举
createTime: 2025/02/19 14:45:13
---



```java
import java.util.HashMap;
import java.util.Map;

/**
 * 计划周期类型  年度计划:1 季度计划:2 月度计划:3
 * @author congpeitong
 * @date 2024-12-22 14:37:58
 */
public enum PlanPeriodTypeEnum {

    YEAR("1", "年度计划"),
    QUARTER("2", "季度计划"),
    MONTH("3", "月度计划");

    private final String code;
    private final String name;

    PlanPeriodTypeEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    // 使用两个 Map 来存储 name 到 code 和 code 到 name 的映射
    private static final Map<String, PlanPeriodTypeEnum> nameToEnumMap = new HashMap<>();
    private static final Map<String, PlanPeriodTypeEnum> codeToEnumMap = new HashMap<>();
    // 初始化枚举类时构建映射
    static {
        for (PlanPeriodTypeEnum status : values()) {
            nameToEnumMap.put(status.getName(), status);
            codeToEnumMap.put(status.getCode(), status);
        }
    }

    // 通过 name 查找枚举实例
    public static PlanPeriodTypeEnum fromName(String name) {
        return nameToEnumMap.get(name);
    }

    // 通过 code 查找枚举实例
    public static PlanPeriodTypeEnum fromCode(String code) {
        return codeToEnumMap.get(code);
    }

    // 通过 name 查找 code
    public static String getCodeByName(String name) {
        PlanPeriodTypeEnum status = nameToEnumMap.get(name);
        return status != null ? status.getCode() : null;
    }

    // 通过 code 查找 name
    public static String getNameByCode(String code) {
        PlanPeriodTypeEnum status = codeToEnumMap.get(code);
        return status != null ? status.getName() : null;
    }
}
```

