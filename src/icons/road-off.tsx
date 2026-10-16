"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19l3.332 -11.661"}],["path",{"d":"M16 5l2.806 9.823"}],["path",{"d":"M12 8v-2"}],["path",{"d":"M12 13v-1"}],["path",{"d":"M12 18v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.67,13.17],[17.4,9.91],[12,7],[12,12.5],[12,17]]}];

export const RoadOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RoadOffIcon.displayName = "RoadOffIcon";
