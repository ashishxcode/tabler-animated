"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 19l2.5 -2.5"}],["path",{"d":"M18.5 14.5l1.5 -1.5"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M19 5h-7l-.646 2.262"}],["path",{"d":"M10.448 10.431l-2.448 8.569l-3 -6h-2"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[19.25,13.75],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.25,17.75],[15.18,6.13],[6.72,14.72]]}];

export const MathOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathOffIcon.displayName = "MathOffIcon";
