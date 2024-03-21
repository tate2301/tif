import OverviewTile from '../../components/tiles/OverviewTile';
// import OverviewGraph from '../../components/graphs/OverviewGraph';
import SaleItem from '../../components/sale-item/SaleItem';
import OverviewLayout from '../../layouts/OverviewLayout';

const Overview = () => {
  return (
    <OverviewLayout heading="Overview">
      <div className="text-main flex-col space-y-8">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          <OverviewTile />
          <OverviewTile />
          <OverviewTile />
          {/* <OverviewTile /> */}
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4 flex-1 h-96">
          <div className=" main-border col-span-3 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-4">Overview</p>
            <div className="flex">
              {/* <OverviewGraph /> */}
            </div>
          </div>
          <div className=" main-border col-span-2 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-1">
              Recent Sales
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm font-semibold pb-4">
              You made 265 sales this month
            </p>
            <div className="flex-col space-y-4">
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
            </div>
          </div>
        </div>
      </div>
    </OverviewLayout>
  );
};

export default Overview;
