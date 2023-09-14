from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import login,UserRegister
from .serializers import loginSerializer,registerSerializer

class Registerapi(GenericAPIView):
    serializer_class=loginSerializer
    serializer_class_reg=registerSerializer
    def post(self,request):
        name=request.data.get('name')
        contact=request.data.get('contact')
        email=request.data.get('email')
        username=request.data.get('username')
        password=request.data.get('password')
        role='user'
        log_id=''
        if(login.objects.filter(username=username)):
            return Response({'message':'duplicate username found'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class(data={'username':username,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
        serializer_reg=self.serializer_class_reg(data={'name':name,'contact':contact,'email':email,'log_id':log_id})
        if serializer_reg.is_valid():
             serializer_reg.save()
             return Response({'data':serializer_reg.data,'message':'Registered success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class loginAPI(GenericAPIView):
    serializer_class=loginSerializer
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=login.objects.filter(username=username,password=password)
        








        




