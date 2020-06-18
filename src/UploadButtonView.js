import React from 'react';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function UploadButtonView() {
	return (
		<div>
			<Button
				variant="contained"
				color="default"
				size="small"
				startIcon={<CloudUploadIcon />}
			>
		        Upload
		    </Button>
	    </div>
    );
}