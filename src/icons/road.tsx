"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19l4 -14"}],["path",{"d":"M16 5l4 14"}],["path",{"d":"M12 8v-2"}],["path",{"d":"M12 13v-2"}],["path",{"d":"M12 18v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[12,12],[12,17]]}];

export const RoadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RoadIcon.displayName = "RoadIcon";
