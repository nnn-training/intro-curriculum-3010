FROM --platform=linux/x86_64 node:latest

RUN apt-get update && \ 
    apt-get install -y locales git procps
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /intro-curriculum-3010
