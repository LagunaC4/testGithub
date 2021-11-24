<?php

	$dom = new DOMDocument();

		$dom->encoding = 'utf-8';

		$dom->xmlVersion = '1.0';

		$dom->formatOutput = true;

	    $xml_file_name = 'professeur.xml';

		$root = $dom->createElement('response');

		$response_node = $dom->createElement('profs');

        $child_node_prof = $dom->createElement('prof');

	    $child_node_nom = $dom->createElement('nom', 'VOISIN');

		$response_node->appendChild($child_node_nom);

		$child_node_prenom = $dom->createElement('prenom', 'Marc');

		$response_node->appendChild($child_node_prenom);

        $response_node->appendChild($child_node_prof);

		$root->appendChild($response_node);

		$dom->appendChild($root);

	$dom->save($xml_file_name);

	echo "$xml_file_name has been successfully created";
?>