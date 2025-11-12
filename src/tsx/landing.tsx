const Landing: React.FC = () => {
  return (
    <main>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mt-4">Bio</h3>
        <p className="mt-2 text-base italic">
          Daydreamer.
        </p>
        <p className="mt-2 text-sm">
          A jack of many trades, often better than a master of one. I have
          worked in full-stack development, sales, marketing, product, and
          design. I often moonlight as a photographer.{" "}
        </p>
        <p className="mt-2 text-sm">
          All work and no play makes this 'jack' a dull boy;thus, when I'm not
          stuck behind a computer screen, I enjoy cooking, traveling and
          discovering new sounds — always seeking new perspectives and
          inspiration.
        </p>
        {/* <div className="flex justify-between mt-4">
          <a
            href="/about"
            className="text-sm text-custom-orange cursor-pointer hover:underline"
          >
            Learn more about me →
          </a>
          <a
            href="/resume"
            className="text-sm text-custom-orange cursor-pointer hover:underline"
          >
            View my resume →
          </a>
        </div> */}
      </section>
      <section>
        <h3 className="text-xl font-semibold mt-8 mb-2">Projects</h3>
        <div className="space-y-6">
           <div>
            <a
              href="https://www.mangosalt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange underline"
            >
              <h5 className="text-base font-medium">Mangosalt</h5>
            </a>
            <p className="text-sm">
              Creative studios: a playground for ideas
            </p>
          </div>
        <div>
            <a
              href="https://theFidia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange underline"
            >
              <h5 className="text-base font-medium">theFidia</h5>
            </a>
            <p className="text-sm">
              A Saas Music publishing administration platform
            </p>
          </div>
          <div>
            <a
              href="https://github.com/the-blaque/FakeNews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange underline"
            >
              <h5 className="text-base font-medium">FactFinder</h5>
            </a>
            <p className="text-sm">
              A Machine Learning and Natural Language Processing Approach to
              Detecting Fake News
            </p>
          </div>
          <div>
            <a
              href="https://github.com/the-blaque/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange underline"
            >
              <h5 className="text-base font-medium">Portfolio</h5>
            </a>
            <p className="text-sm">Source code for this portfolio</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
