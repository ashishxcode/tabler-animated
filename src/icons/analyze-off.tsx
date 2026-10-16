"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69"}],["path",{"d":"M4 13a8.1 8.1 0 0 0 13.687 4.676"}],["path",{"d":"M20 16a1 1 0 0 0 -1 -1"}],["path",{"d":"M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[19.5,15.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.5,7.51],[10.84,16.49],[5,8],[11.85,12.15]]}];

export const AnalyzeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AnalyzeOffIcon.displayName = "AnalyzeOffIcon";
