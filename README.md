## 签名方法：

1、使用keytool工具生成数字证书

keytool -genkey -v -keystore app.keystore -alias app.keystore -keyalg RSA -validity 20000
说明：
      1）keytool是工具名称，-genkey意味着执行的是生成数字证书操作，-v表示将生成证书的详细信息打印出来，显示在dos窗口中；
      2）-keystore app.keystore 表示生成的数字证书的文件名为"app.keystore"；
      3）-alias app.keystore 表示证书的别名为"app.keystore"，当然可以不和上面的文件名一样；
      4）-keyalg RSA 表示生成密钥文件所采用的算法为RSA；
      5）-validity 20000 表示该数字证书的有效期为20000天，意味着20000天之后该证书将失效
在执行上面的命令生成数字证书文件时，会提示你输入一些信息，包括证书的密码。



2、使用jarsigner工具为Android应用程序签名

jarsigner -verbose -keystore app.keystore -signedjar android_signed.apk  D:\MyProjects\hello\platforms\android\build\outputs\apk\android-release-unsigned.apk app.keystore
说明：
      1）jarsigner是工具名称，-verbose表示将签名过程中的详细信息打印出来，显示在dos窗口中；
      2）-keystore liufeng.keystore 表示签名所使用的数字证书所在位置，这里没有写路径，表示在当前目录下；
      3）-signedjar android_signed.apk D:\MyProjects\hello\platforms\android\build\outputs\apk\android-release-unsigned.apk 表示给android-release-unsigned.apk文件签名，签名后的文件名称为android_signed.apk；
      4）最后面的app.keystore 表示证书的别名，对应于生成数字证书时-alias参数后面的名称



3、使用zipalign工具优化已签名的apk（非必须但建议这么做）
  zipalign -v 4 android_signed.apk android_signed_aligned.apk
说明：
      1）zipalign是工具名称，-v表示在DOS窗口打印出详细的优化信息；
      2）android_signed.apk android_signed_aligned.apk 表示对已签名文件notepad_signed.apk进行优化，优化后的文件名为android_signed_aligned.apk