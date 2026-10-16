"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M12 11.875l3 -1.687"}],["path",{"d":"M12 11.875v3.375"}],["path",{"d":"M12 11.875l-3 -1.687"}],["path",{"d":"M12 11.875l3 1.688"}],["path",{"d":"M12 8.5v3.375"}],["path",{"d":"M12 11.875l-3 1.688"}],["path",{"d":"M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,3,6],"o":[7.5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2,4,5,7],"o":[16.5,12],"d":[1.8,0]}];

export const CodeAsteriskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeAsteriskIcon.displayName = "CodeAsteriskIcon";
