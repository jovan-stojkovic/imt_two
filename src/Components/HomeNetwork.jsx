import Bar from "./Bar";
import { Link } from "react-router-dom";

const HomeNetwork = () => {
  return (
    <>
      <div className="home-network">
        <Bar headline={"PRODAJNA MREŽA"} />
        <div className="img-cont">
          <Link
            className="network-link"
            to="/prodajna-mreza"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          ></Link>
        </div>
        <div className="text-part">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            dignissimos quisquam quo libero autem beatae impedit quasi. Totam
            dignissimos facere, saepe reiciendis similique dolorem nulla eius
            et? Necessitatibus officiis, laborum nostrum quasi, exercitationem
            iure distinctio maiores officia temporibus repellendus, eum quam ex?
            Deserunt aliquam ullam saepe aspernatur quasi iusto fuga, soluta
            eveniet aut explicabo vel totam maiores quas nemo velit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            dignissimos quisquam quo libero autem beatae impedit quasi. Totam
            dignissimos facere, saepe reiciendis similique dolorem nulla eius
            et? Necessitatibus officiis, laborum nostrum quasi, exercitationem
            iure distinctio maiores officia temporibus repellendus, eum quam ex?
            Deserunt aliquam ullam saepe aspernatur quasi iusto fuga, soluta
            eveniet aut explicabo vel totam maiores quas nemo velit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            dignissimos quisquam quo libero autem beatae impedit quasi. Totam
            dignissimos facere, saepe reiciendis similique dolorem nulla eius
            et? Necessitatibus officiis, laborum nostrum quasi, exercitationem
            iure distinctio maiores officia temporibus repellendus, eum quam ex?
            Deserunt aliquam ullam saepe aspernatur quasi iusto fuga, soluta
            eveniet aut explicabo vel totam maiores quas nemo velit.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeNetwork;
