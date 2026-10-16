"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M17.582 17.59a2 2 0 0 0 2.833 2.824"}],["path",{"d":"M14 14h-1.4"}],["path",{"d":"M6 6v5"}],["path",{"d":"M6 8h2m4 0h5"}],["path",{"d":"M15 8v3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"o":[16.51,17.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,16],[6,8.5],[11.5,8],[15,9.5]]}];

export const WheelchairOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WheelchairOffIcon.displayName = "WheelchairOffIcon";
