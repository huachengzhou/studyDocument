
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















# [回到操作系统首页](./index.md)