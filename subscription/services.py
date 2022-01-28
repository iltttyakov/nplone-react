from django.contrib.staticfiles import finders
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from email.mime.image import MIMEImage


def render_msg(subscriber):
    return render_to_string(
        f'subscription/email/{subscriber.lang}_email.html',
        {'subscriber': subscriber}
    )


def subscribe_confirmation(subscriber):
    to_email = [subscriber.email, ]
    body = render_msg(subscriber)
    subject = 'N+1 | Get the App Confirmation'
    from_email = 'team@nplone.com'

    msg = EmailMessage(
        subject=subject,
        body=body,
        from_email=from_email,
        to=to_email,
        headers={'From': f'N+1 <{from_email}>'}
    )
    msg.content_subtype = 'html'

    image_path = finders.find('subscription/email_photo.jpg')
    if image_path:
        img_data = open(image_path, 'rb').read()
        img = MIMEImage(img_data, 'jpeg')
        img.add_header('Content-Id', '<email_image>')
        img.add_header('Content-Disposition', 'inline', filename='email_image')
        msg.attach(img)

    msg.send()
