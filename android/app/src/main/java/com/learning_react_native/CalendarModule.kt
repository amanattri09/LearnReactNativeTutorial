package com.learning_react_native

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class CallenderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "CalendarModule"
    }

}