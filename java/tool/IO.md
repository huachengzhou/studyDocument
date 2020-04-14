


## org.apache.commons.io.FilenameUtils 文件名称操作


+ FilenameUtils.getExtension(fileName) 获取文件后缀 //text

+ FilenameUtils.getName(fileName) 获取文件完整名称 //c.text

+ FilenameUtils.getBaseName(fileName) 获取文件名称 //c

+ FilenameUtils.getFullPath(fileName) 获取文件的完整路径 //D:\data\


```
String path = "D:\\data\\假设开发法土地模板.docx" ;
String fullPath = FilenameUtils.getFullPath(path);
System.out.println("fullPath:"+fullPath);//D:\data\

String name = FilenameUtils.getName(path);
System.out.println("name:"+name); //假设开发法土地模板.docx

String prefix = FilenameUtils.getPrefix(path);
System.out.println("prefix:"+prefix); //D:\

int prefixLength = FilenameUtils.getPrefixLength(path);
System.out.println("prefixLength:"+prefixLength); //3

String path1 = FilenameUtils.getPath(path);
System.out.println("path:"+path1); //data\

String baseName = FilenameUtils.getBaseName(path);
System.out.println("baseName:"+baseName); //假设开发法土地模板

String extension = FilenameUtils.getExtension(path);
System.out.println("extension:"+extension); //docx

```


## FileUtils：提供文件操作（移动文件，读取文件，检查文件是否存在等等）的方法。  IOCase：提供字符串操作以及比较的方法。



## FileSystemUtils：提供查看指定目录剩余空间的方法。















































































































## [回到上级](../index.md)