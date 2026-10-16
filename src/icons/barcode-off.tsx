"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7v-1c0 -.552 .224 -1.052 .586 -1.414"}],["path",{"d":"M4 17v1a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M16 20h2c.551 0 1.05 -.223 1.412 -.584"}],["path",{"d":"M5 11h1v2h-1l0 -2"}],["path",{"d":"M10 11v2"}],["path",{"d":"M15 11v.01"}],["path",{"d":"M19 11v2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17.71,19.71],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,6,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[4.29,5.79],[6,18.5],[18,5.5],[5.5,12],[10,12],[15,11.01],[19,12]]}];

export const BarcodeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarcodeOffIcon.displayName = "BarcodeOffIcon";
