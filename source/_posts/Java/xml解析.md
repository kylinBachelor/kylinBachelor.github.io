---
title: xml解析
author: 野路子随笔
top: false
cover: false
toc: true
mathjax: false
date: 2023-12-12 13:38:16
img:
coverImg:
password:
summary: xml解析
tags:
- XML
- Java
categories:
- Java
---


```java
public class test {
    public static void main(String[] args) {
        try {
            xmlString = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
                "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n" +
                "  <soap:Body>\n" +
                "    <ns2:importFilesForXMLResponse xmlns:ns2=\"http://service.webservice.archive.component.ces.com/\">\n" +
                "      <return>{\"status\":\"1\",\"value\":\"sql执行出错\"}</return>\n" +
                "    </ns2:importFilesForXMLResponse>\n" +
                "  </soap:Body>\n" +
                "</soap:Envelope>";
            javax.xml.parsers.DocumentBuilderFactory factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
            javax.xml.parsers.DocumentBuilder builder = factory.newDocumentBuilder();
            org.w3c.dom.Document document = builder.parse(new org.xml.sax.InputSource(new java.io.StringReader(xmlString)));
            
            org.w3c.dom.Element root = document.getDocumentElement();
            // 解析return标签内容
            org.w3c.dom.NodeList titleNodeList = root.getElementsByTagName("return");
            if (titleNodeList.getLength() > 0) {
                org.w3c.dom.Element titleElement = (org.w3c.dom.Element) titleNodeList.item(0);
                String title = titleElement.getTextContent();
                System.out.println("Title: " + title);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
