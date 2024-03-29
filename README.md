# IoT Smart Blind App
This is a React.js application powered by Node.js and Express that provides 4 main functions such as Normal, Energy Efficiency, Landscape, Crime prevention and Alarm mode.


<div margin:30>
  <img src="https://user-images.githubusercontent.com/55680343/103479273-efd32400-4e0f-11eb-886f-712624b6d092.png" width="190">
  <img src="https://user-images.githubusercontent.com/55680343/103479274-f5c90500-4e0f-11eb-8372-afc8a21f0386.png" width="190">
  <img src="https://user-images.githubusercontent.com/55680343/103479276-fa8db900-4e0f-11eb-90da-9eca71fb64f8.png" width="190">
  <img src="https://user-images.githubusercontent.com/55680343/103479279-ff526d00-4e0f-11eb-8327-f60f498b2725.png" width="190">
  <img src="https://user-images.githubusercontent.com/55680343/103479280-037e8a80-4e10-11eb-8688-aa56e77f1014.png" width="190">
</div>


## Features
----
- 일반 모드
- 에너지 효율 모드
- 조경 모드
- 방범 모드
- 알람 모드


## Architectures
----

<img width="1046" alt="스크린샷 2021-09-01 오후 4 05 54" src="https://user-images.githubusercontent.com/55680343/131627326-567c0704-c603-49e8-bd68-ca916ab42f7c.png">


## Outgoing Message Format
---

* 기기 등록
 
```
기기 세팅 연결 : APPSETTING CONNECTED

기기 세팅 초기화 : APPSETTING INITIALIZINGSTART

커튼 최상단 높이 설정 시작 : APPSETTING TOPSETTINGSTART

커튼 최하단 높이 설정 시작 : APPSETTING BOTTOMSETTINGSTART

커튼 상단 조절 : APPSETTING UP

커튼 하단 조절 : APPSETTING DOWN

와이파이 목록 로드 : APPSETTING WIFILIST

와이파이 정보 전송 : APPSETTING SSID+' 와이파이 명'+' 와이파이 암호'+' 위도'+' 경도'

기기 세팅 완료 : APPSETTING CLOSED
```


* 기기 및 모드 정보 전송

```
기기 및 모드 정보 전송 : APP+' 디바이스 ID'+' 전원 상태'+' 모드 넘버'

알람 모드 정보 전송 : APP+' 디바이스 ID+'+' 전원 상태'+' 모드 넘버'+'알람 설정 시간'

방범 모드 정보 전송 : APP+' 디바이스 ID+'+' 전원 상태'+' 모드 넘버'+'개폐 간격 시간'
```



Google Store
----------------
https://play.google.com/store/apps/details?id=com.curtaincall
