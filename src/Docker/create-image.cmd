docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat9/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat9/app ../..
