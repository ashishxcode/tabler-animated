"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 13h1"}],["path",{"d":"M20 13h1"}],["path",{"d":"M5.6 6.6l.7 .7"}],["path",{"d":"M18.4 6.6l-.7 .7"}],["path",{"d":"M8 13a4 4 0 1 1 8 0"}],["path",{"d":"M3 17h18"}],["path",{"d":"M7 20h5"}],["path",{"d":"M16 20h1"}],["path",{"d":"M12 5v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[12,17],"a":0.1},{"fx":"spin","n":[0,1,2,3,4,6,7,8],"o":[12,12],"a":45,"sym":true}];

export const Sunset2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Sunset2Icon.displayName = "Sunset2Icon";
