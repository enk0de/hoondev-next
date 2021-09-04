import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document';
import { extractCritical } from '@emotion/server';
import { EmotionCritical } from '@emotion/server/create-instance';
import { RenderPage } from 'next/dist/shared/lib/utils';

type MyDocumentProps = EmotionCritical & RenderPage & DocumentInitialProps;

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
