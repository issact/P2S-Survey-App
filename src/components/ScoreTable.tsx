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

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { PlusCircleIcon } from 'lucide-react';


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
              <TableHead className='text-[#E7ECF0] text-left'>Variables</TableHead>
              <TableHead className='text-[#E7ECF0] text-center'>Organisation Score</TableHead>
              <TableHead className='text-[#E7ECF0] text-center'>Market Benchmark Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow className='text-white'>
                  <TableCell>1</TableCell>
                  <TableCell className='text-left relative'>
                    Strategy and governance
                  <Collapsible>
                  <CollapsibleTrigger><PlusCircleIcon className='absolute top-5 right-2'/></CollapsibleTrigger>
                  <CollapsibleContent className='flex flex-wrap gap-2'>
                  <span className='bg-[#B4C4D1] rounded text-white px-2 py-1'>option 1</span> <span className='bg-[#B4C4D1] rounded text-white px-2 py-1'>option 2</span>
                  <span className='bg-[#B4C4D1] rounded text-white px-2 py-1'>option 3</span><span className='bg-[#B4C4D1] rounded text-white px-2 py-1'>option 4</span>
                  <span className='bg-[#B4C4D1] rounded text-white px-2 py-1'>option 5</span>
                  </CollapsibleContent>
                  </Collapsible>

                  </TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>2</TableCell>
                  <TableCell className='text-left'>AI foundations</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>3</TableCell>
                  <TableCell className='text-left'>AI metrics</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>4</TableCell>
                  <TableCell className='text-left'>AI currency</TableCell>
                  <TableCell>2.8</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow className='text-white'>
                  <TableCell>5</TableCell>
                  <TableCell className='text-left'>AI change management</TableCell>
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