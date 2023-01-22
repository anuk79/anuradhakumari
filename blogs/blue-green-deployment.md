---
title: Blue-Green deployment
author: Anuradha Kumari
published: '2020-09-23'
category: TIL
topics: [Deployment]
excerpt: ''
---

Today I came across term [Blue-Green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) while reading through some articles and this is a perfect <abbr title="Today I learned">TIL</abbr>.

## What is it?

In a nutshell, Blue-Green Deployment is a technique of running two identical production environments called Blue and Green.

At any time, only one of the environments is live, with the live environment serving all production traffic.

For e.g - let say we have the Blue environment currently live. As we prepare a new version of software, the deployment and final stage of testing takes place in the environment that is not live: in this example, Green.

Once we have deployed and fully tested the software in Green, we switch the router so all incoming requests now go to Green instead of Blue.

Green is now live, and Blue is idle.

## Advantages

This technique can eliminate downtime due to app deployment.

In addition, blue-green deployment reduces risk: if something unexpected happens with the new version on Green, we can immediately roll back to the last version by switching back to Blue.

## References

- [Martin Fowler article on Blue-Green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)
- [Cloud foundary guide on Blue-Green deployment](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html)
- [Article on colorful deployments](https://opensource.com/article/17/5/colorful-deployments)
