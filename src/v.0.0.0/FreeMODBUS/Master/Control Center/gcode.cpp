#include "stdafx.h"

#include <ctype.h>
#include "gcode.h"

int gcode_loadstr( char *gcode_str, LPLIST *lpRootGProgramList )
{
	int k = 0;
	char c;
	float d;
	double fac = 2.54f / 100.0f;			// convert inches to meters
	double ufac = sqrt( 2.54f / 100.0f );	// convert u, v
	double feedfac = fac / 60.0f;			// convert to inches/min

	gcode *gc;
	
	fac		= 1.0f;							// undo conversion
	ufac	= 1.0f;
	feedfac	= fac * 0.2f;

	while( c = *gcode_str ) {
		if(
			(' ' == c) || ('\n' == c) || ('\r' == c) || ('\t' == c)
		) {
			++gcode_str;
			continue;
		}

		if( '(' == c ) {
			while( ( c = *gcode_str++ ) && ( ')' != c ) );
			continue;
		}

		if( EOF != sscanf( gcode_str + 1, "%f", &d ) ) {
			if( isdigit(c) || '.' == c || '-' == c ) {
				++gcode_str;
				continue;
			}
		} else {
			break;
		}

		if( 'G' == c ) {
			gc = gcode_new( );
			gc->G = (int)d;

			addToList( lpRootGProgramList, gc, NULL );
		} else

		if( NULL != gc ) { 
			switch( c ) {

			case 'X':
				gc->X = d; // fac * d;
				gc->axesFlag |= 1;
			 break;

			case 'Y':
				gc->Y = d; // fac * d;
				gc->axesFlag |= 2;
			 break;

			case 'Z':
				gc->Z = d; // fac * d;
				gc->axesFlag |= 4;
			 break;

			case 'U':
				gc->U = d; // fac * d;
				gc->axesFlag |= 8;
			 break;

			case 'V':
				gc->V = d; // fac * d;
				gc->axesFlag |= 16;
			 break;

			case 'W':
				gc->W = d; // fac * d;
				gc->axesFlag |= 32;
			 break;

			case 'F':
			 break;

			/*
			case 'F': gc->F = feedfac * d; break;
			case 'U': gc->U = feedfac * d; break;
			case 'H': gc->H = (int)d; break;
			case 'A': gc->A = ufac * d; break;
			case 'B': gc->B = ufac * d; break;
			case 'C': gc->C = ufac * d; break;
			case 'P': gc->P = ufac * d; break;
			case 'Q': gc->Q = ufac * d; break;
			case 'R': gc->R = ufac * d; break;
			*/
			
			default:
				printf( "unrecognized code %c\n", c );
				return 1;
			 break;
			}
		}

		++gcode_str;
	}

	return 0;
}

gcode *gcode_new( void )
{
	gcode *gc = (gcode*)malloc( sizeof(gcode) );

	gc->G	= 0;
	gc->X	= 0.0f;
	gc->Y	= 0.0f;
	gc->Z	= 0.0f;
	gc->U	= 0.0f;
	gc->V	= 0.0f;
	gc->W	= 0.0f;

	gc->axesFlag = 0;

	return gc;
}