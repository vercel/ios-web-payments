'use client'
import { View, Text, StyleSheet } from 'react-native'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Zero-commission iOS app payments with Solito.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          This repo is a demonstration of an iOS app with zero-commission
          payments on the web. It is based on the Solito starter, with Next.js
          API routes and a React Native mobile app.
        </Text>

        <View style={styles.features} role="list">
          <Text style={styles.featureTitle}>Run it yourself:</Text>
          <Text style={styles.featureItem} role="listitem">
            1.{' '}
            <Text
              style={styles.link}
              href="https://vercel.com/templates/Next.js/ios-web-payments-starter"
              target="_blank"
              rel="noopener noreferrer"
              hrefAttrs={{
                rel: 'noopener noreferrer',
                target: '_blank',
              }}
            >
              Deploy the API to Vercel
            </Text>
          </Text>
          <Text style={styles.featureItem} role="listitem">
            2.{' '}
            <Text
              style={styles.link}
              href="https://github.com/vercel/ios-web-payments"
              target="_blank"
              rel="noopener noreferrer"
              hrefAttrs={{
                rel: 'noopener noreferrer',
                target: '_blank',
              }}
            >
              Clone the GitHub repo
            </Text>
          </Text>
        </View>

        <View style={styles.features} role="list">
          <Text style={styles.featureTitle}>Key Benefits:</Text>
          <Text style={styles.featureItem} role="listitem">
            • In-app steering to external payment pages is allowed
          </Text>
          <Text style={styles.featureItem} role="listitem">
            • No more Apple tax on payments they don&apos;t process
          </Text>
          <Text style={styles.featureItem} role="listitem">
            • Improved user experience without &quot;scare screens&quot;
          </Text>
          <Text style={styles.featureItem} role="listitem">
            • Full control over your payment experience
          </Text>
          <Text style={styles.featureItem} role="listitem">
            • Stripe payment integration
          </Text>
          <Text style={styles.featureItem} role="listitem">
            • Apple Pay support on web
          </Text>
        </View>

        <Text style={styles.paragraph}>
          As of April 30, 2025, iOS developers can offer web-based checkout
          without incurring Apple&apos;s commission, thanks to a federal court
          ruling in Epic Games v. Apple.
        </Text>

        <Text
          style={styles.link}
          //   onPress={() =>
          //     Linking.openURL(
          //       'https://vercel.com/blog/ios-developers-can-now-offer-commission-free-payments-on-web-7mmIZlW7XQFEdh2Fd7PAXB'
          //     )
          //   }
          href="https://vercel.com/blog/ios-developers-can-now-offer-commission-free-payments-on-web-7mmIZlW7XQFEdh2Fd7PAXB"
          target="_blank"
          rel="noopener noreferrer"
          hrefAttrs={{
            rel: 'noopener noreferrer',
            target: '_blank',
          }}
        >
          Read the full article on Vercel&apos;s blog →
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxWidth: 800,
    width: '100%',
    marginHorizontal: 'auto',
  },
  header: {
    marginBottom: 40,
    marginTop: 60,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    color: '#666',
  },
  content: {
    marginBottom: 40,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 20,
    color: '#333',
  },
  highlight: {
    fontSize: 18,
    lineHeight: 26,
    padding: 15,
    backgroundColor: '#f0f9ff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#0070f3',
    marginBottom: 24,
    color: '#333',
  },
  features: {
    marginBottom: 20,
    marginTop: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  featureItem: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 8,
    color: '#333',
  },
  link: {
    fontSize: 18,
    color: '#0070f3',
    textDecorationLine: 'underline',
    // marginTop: 10,
    marginBottom: 20,
  },
})
