"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.56 3.69a9 9 0 0 0 -.577 .263"}],["path",{"d":"M3.69 8.56a9 9 0 0 0 -.69 3.44"}],["path",{"d":"M3.69 15.44a9 9 0 0 0 1.95 2.92"}],["path",{"d":"M8.56 20.31a9 9 0 0 0 3.44 .69"}],["path",{"d":"M15.44 20.31a9 9 0 0 0 2.92 -1.95"}],["path",{"d":"M20.31 15.44a9 9 0 0 0 .69 -3.44"}],["path",{"d":"M20.31 8.56a9 9 0 0 0 -1.95 -2.92"}],["path",{"d":"M15.44 3.69a9 9 0 0 0 -3.44 -.69"}],["path",{"d":"M10.57 10.602a2 2 0 0 0 2.862 2.795"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[9],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4,5],"o":[18.22,16.15],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.27,3.82],[3.35,10.28],[4.66,16.9],[10.28,20.66],[19.34,7.1],[13.72,3.35],[11.72,12.3]]}];

export const TiltShiftOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TiltShiftOffIcon.displayName = "TiltShiftOffIcon";
