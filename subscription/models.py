from django.db import models

LANG_CHOICES = (
    ('en', 'en'),
    ('de_de', 'de_de'),
)


class Subscriber(models.Model):
    class Meta:
        verbose_name = 'Subscriber'
        verbose_name_plural = 'Subscribers'

    email = models.EmailField('Email', unique=True)
    name = models.CharField('Name', max_length=100)
    lang = models.CharField('Language', choices=LANG_CHOICES, max_length=5)
    subscription_date = models.DateTimeField('Subscription date', auto_now_add=True)

    def __str__(self):
        return self.email
