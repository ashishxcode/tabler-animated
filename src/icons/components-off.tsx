"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12l3 3l3 -3l-3 -3l-3 3"}],["path",{"d":"M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5"}],["path",{"d":"M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5"}],["path",{"d":"M9 18l3 3l3 -3l-3 -3l-3 3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[18.25,11.75],[12.25,5.75],[12,18]]}];

export const ComponentsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ComponentsOffIcon.displayName = "ComponentsOffIcon";
