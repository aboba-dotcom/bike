"use client" 
import {FlexColumnContainer} from "@/components/common/styles"
import { Button } from "@/styles/common";
import Link from "next/link";

const EmptyPage = () => (
  <FlexColumnContainer style={{ margin: '100px 0', justifyContent: "center", alignItems: "center" }}>
    <p style={{ fontSize: 30, color: 'rgba(0,0,0,.3)', fontWeight: 600 }}>There are nothing yet</p>
    <Link href="/"><Button style={{ marginTop: 120, width: 300, backgroundColor: '#1919e6' }}>Back to catalog</Button></Link>
  </FlexColumnContainer>
);

export default EmptyPage 