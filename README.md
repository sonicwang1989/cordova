## ǩ��������

1��ʹ��keytool������������֤��

keytool -genkey -v -keystore app.keystore -alias app.keystore -keyalg RSA -validity 20000
˵����
      1��keytool�ǹ������ƣ�-genkey��ζ��ִ�е�����������֤�������-v��ʾ������֤�����ϸ��Ϣ��ӡ��������ʾ��dos�����У�
      2��-keystore app.keystore ��ʾ���ɵ�����֤����ļ���Ϊ"app.keystore"��
      3��-alias app.keystore ��ʾ֤��ı���Ϊ"app.keystore"����Ȼ���Բ���������ļ���һ����
      4��-keyalg RSA ��ʾ������Կ�ļ������õ��㷨ΪRSA��
      5��-validity 20000 ��ʾ������֤�����Ч��Ϊ20000�죬��ζ��20000��֮���֤�齫ʧЧ
��ִ�������������������֤���ļ�ʱ������ʾ������һЩ��Ϣ������֤������롣



2��ʹ��jarsigner����ΪAndroidӦ�ó���ǩ��

jarsigner -verbose -keystore app.keystore -signedjar android_signed.apk  D:\MyProjects\hello\platforms\android\build\outputs\apk\android-release-unsigned.apk app.keystore
˵����
      1��jarsigner�ǹ������ƣ�-verbose��ʾ��ǩ�������е���ϸ��Ϣ��ӡ��������ʾ��dos�����У�
      2��-keystore liufeng.keystore ��ʾǩ����ʹ�õ�����֤������λ�ã�����û��д·������ʾ�ڵ�ǰĿ¼�£�
      3��-signedjar android_signed.apk D:\MyProjects\hello\platforms\android\build\outputs\apk\android-release-unsigned.apk ��ʾ��android-release-unsigned.apk�ļ�ǩ����ǩ������ļ�����Ϊandroid_signed.apk��
      4��������app.keystore ��ʾ֤��ı�������Ӧ����������֤��ʱ-alias�������������



3��ʹ��zipalign�����Ż���ǩ����apk���Ǳ��뵫������ô����
  zipalign -v 4 android_signed.apk android_signed_aligned.apk
˵����
      1��zipalign�ǹ������ƣ�-v��ʾ��DOS���ڴ�ӡ����ϸ���Ż���Ϣ��
      2��android_signed.apk android_signed_aligned.apk ��ʾ����ǩ���ļ�notepad_signed.apk�����Ż����Ż�����ļ���Ϊandroid_signed_aligned.apk