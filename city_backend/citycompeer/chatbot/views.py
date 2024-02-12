 #views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MessageSerializer

from .model.chatbot import predict_class, get_response 
 
class ChatbotAPI(APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        # print("post",   request.data)
        if serializer.is_valid():
            message = serializer.validated_data.get('message')
            intents = predict_class(message)
            response = get_response(intents)
            return Response({'response': response})
        else:
            return Response(serializer.errors, status=400)