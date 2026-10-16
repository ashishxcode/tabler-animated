"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21v-4"}],["path",{"d":"M12 13v-1"}],["path",{"d":"M12 5v-2"}],["path",{"d":"M10 21h4"}],["path",{"d":"M8 8v1h1m4 0h6l2 -2l-2 -2h-10"}],["path",{"d":"M14 14v3h-8l-2 -2l2 -2h7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19],[12,12.5],[12,4],[12,21],[14.5,7],[9,15]]}];

export const DirectionsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DirectionsOffIcon.displayName = "DirectionsOffIcon";
