# Microservices-KPI

Team: 
* [ Диніков Даніїл ](https://github.com/ddynikov)
* [ Петрук Петро ](https://github.com/17etro)
* [ Євген Коваленко ](https://github.com/JohnyKovalenko1337)
* [ Денис Коваленко ](https://github.com/Den-Kov59)


1. Спочатку ми бідлимо наш докер файл для бекенду
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_92.png)



2. 
   Далі ми бідлимо наш докер файл для клієнт, де в нас використовується react.js
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_93.png)


3. Створюємо деплоймент для сервісу 1 та одразу перевіряємо чи він створився
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_94.png)


4. Далі створюємо сервіс для сервісу 1, як бачимо він створився
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_95.png)


5. Створюємо деплоймент та сервіс для нашого клієнту з назвою сервіс2
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_96.png)


6. За допомогою команди ```kubectl proxy``` перевіряємо чи працюють у нас сервіси
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_97.png)


7. Бекенд працює вірно
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_100.png)


8. Клієнт також збілдився та запустився, тому все ок
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_101.png)

9. Щоб запустити наші сервіси за допомогою ```ingress``` спочатку застосуємо його аддон  
в ```minikube```
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_98.png)


10. Далі запускаємо  ```ingress``` за допомогою yaml файлу
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_99.png)


11.  Перевіримо чи коректно працюють наші сервіси
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_102.png)
![alt text](https://raw.githubusercontent.com/JohnyKovalenko1337/images/master/Screenshot_103.png)

Як бачимо клієнт та сервіс працюють добре 
