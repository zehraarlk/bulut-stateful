# En hafif web sunucusu imajını kullanıyoruz
FROM nginx:alpine

# HTML, CSS ve JS dosyalarımızı Nginx'in içine kopyalıyoruz
COPY . /usr/share/nginx/html

# 80 portunu dışarı açıyoruz
EXPOSE 80
