# Creational Patterns

### Builder
Almost all players like to customize their heroes. That's why we need to use builder.
It helps us to set lot of attributes of player heroes in readable format.

### Factory
Okay. We need lot of buildings for our best game.
That's why we created our personal 3D printer (object-factory), which has basic blueprint(game-object) with general data.
Do you need the farm? Ok, just create blueprint (farm) with its personal aspects and 3D printer will print it!
This way gives possibility to make lot of different types of buildings and easily change general attributes at all of them.

### Prototype
So, we need lot of same trees in our game. Let create one tree and clone it as match as wee need.
That's all, fast and easy.

### Singleton
Singleton is our useful but a little toxic friend.
For example, we want access to Registry at every place of code, and singleton can help us.
But, there is one problem! Singletons required behaviours in tests.

