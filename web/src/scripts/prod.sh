echo $FIREBASE_CONFIG_PROD | base64 --decode > .env
echo $STRIPE_KEY_PROD | base64 --decode >> .env
echo $STRIPE_SECRET_KEY_PROD | base64 --decode >> .env
echo $WPAPI_CONFIG | base64 --decode >> .env
echo $PAYPAL_KEY_PROD | base64 --decode >> .env
