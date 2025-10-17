import React, { useState } from 'react'
import { ActivityIndicator, Image, ImageResizeMode, View } from 'react-native'

type AppImageProps = {
  uri?: string
  fallback?: any
  resizeMode?: ImageResizeMode
  className?: string
  showLoader?: boolean
}

export const AppImage: React.FC<AppImageProps> = ({
  uri,
  fallback = require('@/shared/assets/images/defaultImageFallback.jpeg'),
  resizeMode = 'cover',
  className,
  showLoader = true,
}) => {
  const [isLoading, setIsLoading] = useState(!!uri)
  const [hasError, setHasError] = useState(false)

  const source =
    !uri || hasError
      ? fallback
      : {
          uri,
        }

  return (
    <View>
      {showLoader && isLoading && (
        <View
          className={`absolute w-full h-full inset-0 z-10 justify-center items-center bg-surface-secondary ${className}`}
        >
          <ActivityIndicator size={24} />
        </View>
      )}

      <Image
        className={className}
        source={source}
        resizeMode={resizeMode}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  )
}
