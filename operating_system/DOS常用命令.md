
+ wing+r  ==> cmd 进入dos控制台

+ D:

```
进入D盘
```


+ cd命令

```
CD命令是更改目录命令 如果要进入D盘不用这个命令直接输入 D: 回车 即可
例如:
C:\Users\HP>D:

D:\>

D:\>dir
 驱动器 D 中的卷是 新加卷
 卷的序列号是 DAB4-11FE

 D:\ 的目录

2019-10-10  14:15    <DIR>          360极速浏览器下载
2020-01-13  13:47    <DIR>          BaiduNetdiskDownload
2020-01-20  13:59    <DIR>          CS
2019-12-13  16:53    <DIR>          data
2020-02-10  15:55    <DIR>          IdeaProjects
2019-12-06  15:01    <DIR>          log
2019-10-23  10:40    <DIR>          MailMasterData
2019-09-29  10:43    <DIR>          output
2020-01-13  13:40    <DIR>          soft
2020-02-04  17:43    <DIR>          temp
2020-01-15  18:05    <DIR>          ultraeditWork
2019-12-10  09:47    <DIR>          workspace
               0 个文件              0 字节
              12 个目录 463,738,040,320 可用字节

D:\>cd CS
D:\CS> /*进入了CS目录**/

```

+ cd .. (进入当前磁盘的根目录)

```
类似于 linux 下的cd ~
zch@zch MINGW64 /d/data
$ cd ~

zch@zch MINGW64 ~
$
```



+ netstat -ano (列出所有端口的情况)


+ 查看被占用端口对应的PID，输入命令：netstat -aon|findstr "49157"，回车，记下最后一位数字，即PID,这里是2720

+ 继续输入tasklist|findstr "2720"，回车，查看是哪个进程或者程序占用了2720端口，结果是：svchost.exe


+ 创建文件 echo >fileName或者 echo [this content] > fileName

```

echo >d.txt;

============>
E:\temp>echo >d.txt;

E:\temp>dir
 驱动器 E 中的卷是 新加卷
 卷的序列号是 64E8-4ABF

 E:\temp 的目录

2020/02/14  18:56    <DIR>          .
2020/02/14  18:56    <DIR>          ..
2020/02/14  18:56                 3 d.txt
               1 个文件              3 字节
               2 个目录 264,645,689,344 可用字节

```

+ 查看文件内容 type fileName

```
E:\temp>type d.txt
this is a text file
```

+ 创建目录 md pathName

```
E:\temp>md cc

E:\temp>dir
 驱动器 E 中的卷是 新加卷
 卷的序列号是 64E8-4ABF

 E:\temp 的目录

2020/02/14  19:02    <DIR>          .
2020/02/14  19:02    <DIR>          ..
2020/02/14  19:02    <DIR>          cc
2020/02/14  18:59                19 d.txt
               1 个文件             19 字节
               3 个目录 264,645,689,344 可用字节
```


+ 复制文件 copy fileName path+fileName

```
E:\temp>copy d.txt E:\temp\cc;
已复制         1 个文件。
```



+ 文件重命名命令 ren sourceFileName targetFileName

```
E:\temp\cc>ren d.txt d2.txt;

E:\temp\cc>type d2.txt
this is a text file
```

+ 文件移动命令(剪贴命令) move fileName path+FileName

```
E:\temp\cc>move d2.txt E:\temp\kk
移动了         1 个文件。
```


+ 文件删除操作 del fileName

```
E:\temp\kk>dir
 驱动器 E 中的卷是 新加卷
 卷的序列号是 64E8-4ABF

 E:\temp\kk 的目录

2020/02/14  19:10    <DIR>          .
2020/02/14  19:10    <DIR>          ..
2020/02/14  18:59                19 d2.txt
               1 个文件             19 字节
               2 个目录 264,645,689,344 可用字节

E:\temp\kk>del d2.txt

E:\temp\kk>dir
 驱动器 E 中的卷是 新加卷
 卷的序列号是 64E8-4ABF

 E:\temp\kk 的目录

2020/02/14  19:12    <DIR>          .
2020/02/14  19:12    <DIR>          ..
               0 个文件              0 字节
               2 个目录 264,645,689,344 可用字节
```


+ 文件夹删除 rd /s path

```
E:\temp\kk>rd /s dg
dg, 是否确认(Y/N)? Y
```

# [回到操作系统首页](./index.md)