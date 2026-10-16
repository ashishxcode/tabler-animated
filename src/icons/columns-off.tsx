"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h2"}],["path",{"d":"M4 10h5.5"}],["path",{"d":"M4 14h5.5"}],["path",{"d":"M4 18h5.5"}],["path",{"d":"M14.5 6h5.5"}],["path",{"d":"M14.5 10h5.5"}],["path",{"d":"M18 14h2"}],["path",{"d":"M14.5 18h3.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6,7],"o":[17.25,16],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,6],[6.75,10],[6.75,14],[6.75,18],[17.25,6],[17.25,10]]}];

export const ColumnsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ColumnsOffIcon.displayName = "ColumnsOffIcon";
