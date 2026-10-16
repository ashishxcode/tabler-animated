"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8"}],["path",{"d":"M12 12v8"}],["path",{"d":"M9 17l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,8],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16],[12,18.5]]}];

export const SwipeDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwipeDownIcon.displayName = "SwipeDownIcon";
