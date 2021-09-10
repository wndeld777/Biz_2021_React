import React,{useEffect,useState,useCallback} from "react";
import { useHistory,useRouteMatch } from "react-router-dom";
import { firestore } from "../config/FirebaseConfig";

function BBsDetail() {

	const router = useHistory();
	const match = useRouteMatch();
	const docId = match.params.id;

    return (
		<div></div>
	)

export default BBsDetail;
