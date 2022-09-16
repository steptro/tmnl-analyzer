import cytoscape, { Stylesheet } from "cytoscape";
import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Layout from "../partials/Layout";
import { useListHackathonsQuery, ListHackathonsQuery } from "../generated/graphql";
import { useNavigate } from "react-router-dom";

function Graph() {
  const navigate = useNavigate();
  const { data, error, loading } = useListHackathonsQuery();

  const style: Stylesheet[] = [
    {
      selector: "node",
      css: {
        label: "data(label)",
        height: 80,
        width: 80,
        "background-fit": "cover",
        "background-opacity": 0.7,
        "border-color": "#000",
        "border-width": 5,
        "border-opacity": 0.9,
        "text-valign": "bottom",
        "text-halign": "center",
      },
    },
    {
      selector: "edge",
      css: {
        "curve-style": "bezier",
        width: 6,
        "target-arrow-shape": "triangle",
        "line-color": "black",
        "target-arrow-color": "black",
      },
    },
    {
      selector: 'node[type = "account"]',
      css: {
        "background-image": "/account.png",
        "background-color": "#FF8C00",
      },
    },
    {
      selector: 'node[type = "customer"]',
      css: {
        "background-image": "/customer.png",
        "background-color": "#00BFFF",
      },
    },
    {
      selector: '[annotation = "suspect_aml"]',
      css: {
        "background-color": "red",
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: '[annotation = "new_transaction"]',
      css: {
        label: "new transaction",
        "line-color": "red",
        "line-style": "dashed",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "[cdd_risk > 3]",
      css: {
        "background-color": "red",
      },
    },
    {
      selector: '[type = "is_customer"]',
      css: {
        "target-arrow-shape": "none",
      },
    },
    {
      selector: '[ type = "has_adress"]',
      css: {
        "line-color": "black",
        "target-arrow-shape": "none",
      }
    },
    {
      selector: 'node[ type = "adress1"]',
      css: {
        "background-image": "/location.png",
      }
    },
    {
      selector: 'node[ type = "adress2"]',
      css: {
        "background-image": "/location.png",
      }
    }
  ];

  const layout = {
    name: "cose",
    directed: false,
    padding: 10,
    animate: "end",
    randomize: true,
  };

  const elements = [
    // communities
    { data: { id: "A", label: "community_a" } },
    { data: { id: "B", label: "community_b" } },
    // nodes
    { data: { id: "1", type: "account", label: "account_1", parent: "A" } },
    { data: { id: "2", type: "account", label: "account_2", parent: "A" } },
    { data: { id: "3", type: "account", label: "account_3", parent: "A" } },
    { data: { id: "4", type: "account", label: "account_4", parent: "A" } },
    { data: { id: "5", type: "account", label: "account_5", parent: "A" } },
    { data: { id: "6", type: "account", label: "account_6", parent: "A" } },
    { data: { id: "7", type: "account", label: "account_7", parent: "B" } },
    { data: { id: "8", type: "account", label: "account_8", parent: "B" } },
    { data: { id: "9", type: "account", label: "account_9", parent: "B" } },
    { data: { id: "10", type: "account", label: "account_10", parent: "B" } },
    { data: { id: "11", type: "customer", label: "Julie Johnston", cdd_risk: 5, country: "MT", parent: "A" } },
    { data: { id: "12", type: "customer", label: "Jennifer Neilson", cdd_risk: 1, country: "NL", parent: "A" } },
    { data: { id: "13", type: "customer", label: "Roger Paletta", cdd_risk: 1, country: "NL", parent: "A" } },
    { data: { id: "14", type: "customer", label: "Jimmy Caron", cdd_risk: 1, country: "MT", parent: "A" } },
    { data: { id: "15", type: "customer", label: "Bobby Harewood", cdd_risk: 1, country: "BE", parent: "A" } },
    { data: { id: "16", type: "customer", label: "Shannon Portis", cdd_risk: 1, country: "NL", parent: "A" } },
    { data: { id: "17", type: "customer", label: "Donald Stahl", cdd_risk: 1, country: "NL", parent: "B" } },
    { data: { id: "18", type: "customer", label: "George Gallo", cdd_risk: 1, country: "NL", parent: "B" } },
    { data: { id: "19", type: "customer", label: "Frist van Weerd", cdd_risk: 5, country: "RU", parent: "B" } },
    { data: { id: "20", type: "customer", label: "Emma Carovski", cdd_risk: 1, country: "NL", parent: "B" } },
    { data: { id: "21", type: "adress1", label: "Wibaut straat 131", href: "" } },
    { data: { id: "22", type: "adress2", label: "Kasteel Heeswijk 1", href: "" } },
    // edges
    { data: { source: "1", target: "3", type: "transaction", annotation: "suspect_aml" } },
    { data: { source: "2", target: "3", type: "transaction" } },
    { data: { source: "3", target: "4", type: "transaction" } },
    { data: { source: "4", target: "5", type: "transaction" } },
    { data: { source: "5", target: "6", type: "transaction" } },
    { data: { source: "3", target: "6", type: "transaction", annotation: "suspect_aml" } },
    { data: { source: "7", target: "8", type: "transaction", annotation: "suspect_aml" } },
    { data: { source: "8", target: "9", type: "transaction", annotation: "suspect_aml" } },
    { data: { source: "9", target: "10", type: "transaction" } },
    { data: { source: "8", target: "10", type: "transaction" } },
    { data: { source: "6", target: "7", type: "transaction", annotation: "new_transaction" } },
    { data: { source: "1", target: "11", type: "is_customer" } },
    { data: { source: "2", target: "12", type: "is_customer" } },
    { data: { source: "3", target: "13", type: "is_customer" } },
    { data: { source: "4", target: "14", type: "is_customer" } },
    { data: { source: "5", target: "15", type: "is_customer" } },
    { data: { source: "6", target: "16", type: "is_customer" } },
    { data: { source: "7", target: "17", type: "is_customer" } },
    { data: { source: "8", target: "18", type: "is_customer" } },
    { data: { source: "9", target: "19", type: "is_customer" } },
    { data: { source: "10", target: "20", type: "is_customer" } },
    { data: { source: "11", target: "21", type: "has_adress" } },
    { data: { source: "12", target: "21", type: "has_adress" } },
    { data: { source: "19", target: "22", type: "has_adress" } },
  ];

  console.dir(data);

  return (
    <Layout>
      <div className="bg-white rounded-md p-4">
        {loading && <div>Loading</div>}
        {error && <div>Error</div>}

        {!loading && !error && (
          <div className="bg-white rounded-md">
            <h2 className="text-2xl mb-2">Community visualization</h2>
            <button
              onClick={() => navigate("/graph2")}
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Fetch related news
            </button>
            <CytoscapeComponent
              elements={elements}
              layout={layout}
              stylesheet={style}
              style={{ width: "2080px", height: "1000px" }}
              className="w-full h-full"
              cy={(something) => something.on("tap", "node[type = \"adress1\"]", () => {
                window.open("https://www.google.com/maps/@52.3542897,4.9122285,3a,75y,93.16h,90t/data=!3m7!1e1!3m5!1s4zkAJWQtBG-pnSVl8kGpWw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D4zkAJWQtBG-pnSVl8kGpWw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D95.171265%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192");
              }).on("tap", "node[type = \"adress2\"]", () => {
                window.open("https://www.google.com/maps/@51.65584,5.4400887,3a,75y,106.38h,87.84t/data=!3m7!1e1!3m5!1sahFXCc2hGVgWgoh8znGUOw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DahFXCc2hGVgWgoh8znGUOw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D39.35957%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656")
              })}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Graph;
