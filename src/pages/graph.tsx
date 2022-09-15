import { Stylesheet } from "cytoscape";
import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Layout from "../partials/Layout";

function Graph() {
  const style: Stylesheet[] = [
    {
      selector: "node",
      css: {
        label: "data(label)",
        height: 80,
        width: 80,
        "background-fit": "cover",
        "border-color": "#000",
        "border-width": 3,
        "border-opacity": 0.5,
        "text-valign": "bottom",
        "text-halign": "center",
      },
    },
    {
      selector: 'node[type == "account"]',
      style: {
        "background-image": "account.jpg",
      },
    },
    {
      selector: 'node[type == "customer"]',
      css: {
        "background-image": "customer.jpg",
      },
    },
  ];

  const layout = {
    name: "cose",
    directed: true,
    padding: 10,
    animate: "end",
    randomize: false,
  };

  const elements = [
    { data: { id: "1", type: "account", label: "account_1" } },
    { data: { id: "2", type: "account", label: "account_2" } },
    { data: { id: "3", type: "account", label: "account_3" } },
    { data: { id: "4", type: "account", label: "account_4" } },
    { data: { id: "5", type: "account", label: "account_5" } },
    { data: { id: "6", type: "account", label: "account_6" } },
    { data: { id: "7", type: "account", label: "account_7" } },
    { data: { id: "8", type: "account", label: "account_8" } },
    { data: { id: "9", type: "account", label: "account_9" } },
    { data: { id: "10", type: "account", label: "account_10" } },
    { data: { id: "11", type: "customer", label: "Julie Johnston", cdd_risk: 1, country: "MT" } },
    { data: { id: "12", type: "customer", label: "Jennifer Neilson", cdd_risk: 1, country: "NL" } },
    { data: { id: "13", type: "customer", label: "Roger Paletta", cdd_risk: 5, country: "NL" } },
    { data: { id: "14", type: "customer", label: "Jimmy Caron", cdd_risk: 1, country: "NL" } },
    { data: { id: "15", type: "customer", label: "Bobby Harewood", cdd_risk: 1, country: "BE" } },
    { data: { id: "16", type: "customer", label: "Shannon Portis", cdd_risk: 1, country: "NL" } },
    { data: { id: "17", type: "customer", label: "Donald Stahl", cdd_risk: 1, country: "NL" } },
    { data: { id: "18", type: "customer", label: "George Gallo", cdd_risk: 5, country: "NL" } },
    { data: { id: "19", type: "customer", label: "William Smart", cdd_risk: 1, country: "RU" } },
    { data: { id: "20", type: "customer", label: "Emma Carovski", cdd_risk: 1, country: "NL" } },
    { data: { source: "1", target: "3", type: "transaction", annotation: ["suspect_aml"] } },
    { data: { source: "2", target: "3", type: "transaction" } },
    { data: { source: "3", target: "4", type: "transaction" } },
    { data: { source: "4", target: "5", type: "transaction" } },
    { data: { source: "5", target: "6", type: "transaction" } },
    { data: { source: "3", target: "6", type: "transaction", annotation: ["suspect_aml"] } },
    { data: { source: "7", target: "8", type: "transaction", annotation: ["suspect_aml"] } },
    { data: { source: "8", target: "9", type: "transaction", annotation: ["suspect_aml"] } },
    { data: { source: "9", target: "10", type: "transaction" } },
    { data: { source: "8", target: "10", type: "transaction" } },
    { data: { source: "6", target: "7", type: "transaction", annotation: ["suspect_aml"] } },
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
  ];

  return (
    <Layout>
      <div className="bg-white rounded-md">
        <CytoscapeComponent
          elements={elements}
          layout={layout}
          stylesheet={style}
          style={{ width: "800px", height: "800px" }}
          className="w-full h-full"
        />
      </div>
    </Layout>
  );
}

export default Graph;
