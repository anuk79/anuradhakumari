---
title: Restart VPN system when it stops working
author: Anuradha Kumari
published: '2021-05-29'
category: TIL
topics: [VPN]
excerpt: How to restart VPN system when it stops working
---

<ol>
    <li>Open task manager and end the VPN session.</li>
    <li>Go to command prompt (cmd) and follow the next commands</li>
    <li>ipconfig /flushdns ( It will flush your DNS entry )</li>
    <li>ipconfig /release ( Your internet will disconnect )</li>
    <li>ipconfig /renew ( internet will connect again)</li>
    <li>Open RUN window ( Windows button + R ).</li>
    <li>type services.msc</li>
    <li>Services window will open > find the vpn service. > restart that service.</li>
    <li>Connect VPN now. It should connect successfully after entering proper id and password.</li>
  </ol>
