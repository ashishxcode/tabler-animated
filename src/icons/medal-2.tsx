"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 3h6l3 7l-6 2l-6 -2l3 -7"}],["path",{"d":"M12 12l-3 -9"}],["path",{"d":"M15 11l-3 -8"}],["path",{"d":"M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12],"a":0.1},{"fx":"pop","n":[1,2],"o":[12,7.5],"a":0.3,"dl":0.12}];

export const Medal2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Medal2Icon.displayName = "Medal2Icon";
