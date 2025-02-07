import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CardBlurry from './ui/card-blurry';
import { AiEfficiencyScore } from './RadarChart';

const ScoreTable = () => {

  return (
    <div className='grid grid-cols-2'>
    <CardBlurry className='bg-gradient3'>
      <Card className='w-full bg-transparent border-0 shadow-none overflow-visible text-center'>
      <CardHeader>
        <CardTitle className='text-[#E7ECF0] mb-4'>Your Scores Table</CardTitle>
        <CardDescription className='text-[#B4C4D1]'>
        Lorem Adflicto bardus corona confido dens deduco. Infit desipio caelum celo succedo bonus dicta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='border border-[#E7ECF0]/40 rounded overflow-hidden score-table'>
        <Table>
          <TableHeader className='bg-[#051B2C]'>
            <TableRow>
              <TableHead className='text-[#E7ECF0] text-center'>#</TableHead>
              <TableHead className='text-[#E7ECF0] text-center'>Variables</TableHead>
              <TableHead className='text-[#E7ECF0] text-center'>Organisation Score</TableHead>
              <TableHead className='text-[#E7ECF0] text-center'>Market Benchmark Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow className='text-white'>
                  <TableCell>1</TableCell>
                  <TableCell>Strategy and governance</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>2</TableCell>
                  <TableCell>AI foundations</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>3</TableCell>
                  <TableCell>AI metrics</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>4</TableCell>
                  <TableCell>AI currency</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>5</TableCell>
                  <TableCell>AI change management</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
          </TableBody>
        </Table>
        </div>

      </CardContent>
    </Card>
    </CardBlurry>
    <div>
    <AiEfficiencyScore />
    </div>

    </div>
  );
};

export default ScoreTable;