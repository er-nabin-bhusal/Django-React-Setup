from django.urls import path
from .views import RoomCreateView, RoomListView

app_name = 'api'

urlpatterns = [
    path('create/room/', RoomCreateView.as_view(), name="create_room"),
    path('list/room/', RoomListView.as_view(), name="list_room"),
]
