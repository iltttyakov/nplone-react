from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/subscription/', include(('subscription.urls', 'subscription'), namespace='subscription')),
    # path(r'', include(('client.urls', 'client'), namespace='client')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
