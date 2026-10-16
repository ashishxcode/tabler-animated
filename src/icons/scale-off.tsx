"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 20h10"}],["path",{"d":"M9.452 5.425l2.548 -.425l6 1"}],["path",{"d":"M12 3v5m0 4v8"}],["path",{"d":"M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"}],["path",{"d":"M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[13.73,5.5],[12,11.5],[6,10.5],[18.16,10.44]]}];

export const ScaleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScaleOffIcon.displayName = "ScaleOffIcon";
