import { GetServerSidePropsContext } from "next";

interface PostData {
  title: string;
  content: string;
}

interface Props {
  postData: PostData;
}

// Example of fetching data using getServerSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slug = params?.slug || "";

  // Fetch data based on slug
  const postData: PostData = {
    title: "tatenda bako",
    content: "the content type",
  }; // Fetch data based on the slug

  return {
    props: {
      postData,
    },
  };
}

function Checkout({ postData }: Props) {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-4xl mx-auto w-full flex flex-col space-y-6">
        <div className="flex flex-col space-y-1">
          <p className="text-slate-900 font-semibold ">Payment details</p>
          <p className="text-sm text-slate-400 font-medium">
            Complete your purchase by providing your payment details
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-slate-900 font-semibold ">Email</p>
          <input
            type="text"
            placeholder="Email"
            className="border border-slate-200/50 rounded px-4 py-2"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-slate-900 font-semibold capitalize">Select Payment method</p>
          <div className="flex flex-row items-center justify-between space-x-4">
            <div className="flex flex-col">
                <p>Ecocash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
